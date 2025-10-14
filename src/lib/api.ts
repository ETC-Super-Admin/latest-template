// src/lib/api.ts

interface FetchOptions extends RequestInit {
  // You can add custom options here if needed
}

class ApiError extends Error {
  status: number;
  data: any;

  constructor(status: number, data: any, message?: string) {
    super(message || "An API error occurred");
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const api = {
  async get<T>(path: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: "GET" });
  },

  async post<T>(path: string, body: any, options?: FetchOptions): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
  },

  async put<T>(path: string, body: any, options?: FetchOptions): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
  },

  async delete<T>(path: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: "DELETE" });
  },

  async request<T>(path: string, options?: FetchOptions): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";
    const url = `${baseUrl}${path}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
          response.status,
          errorData,
          `HTTP error! status: ${response.status}`,
        );
      }

      // Handle cases with no content
      if (response.status === 204) {
        return null as T;
      }

      return response.json() as Promise<T>;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      // Handle network errors or other fetch-related issues
      throw new Error(
        error instanceof Error ? error.message : "A network error occurred",
      );
    }
  },
};

export default api;
