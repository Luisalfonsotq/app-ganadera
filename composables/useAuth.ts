import { navigateTo } from '#app';
import { useCookie, useState, useFetch, useRuntimeConfig } from '#imports';

interface UserCredentials {
  nombre?: string;
  email: string;
  password?: string;
  rol?: string;
}

interface AuthResponse {
  access_token: string;
  user: {
    nombre: string;
    email: string;
    rol: string;
  };
}

export const register = async (credentials: UserCredentials) => {
  const runtimeConfig = useRuntimeConfig();
  const token = useCookie<string | null>('access_token');
  const user = useState<any | null>('user');

  const { data, error } = await useFetch<AuthResponse>(`${runtimeConfig.public.apiBaseUrl}/auth/register`, {
    method: 'POST',
    body: credentials,
  });

  if (error.value) {
    throw new Error(error.value.data.message);
  }

  if (data.value) {
    token.value = data.value.access_token;
    user.value = data.value.user;
    return data.value;
  }
};

export const login = async (credentials: UserCredentials) => {
  const runtimeConfig = useRuntimeConfig();
  const token = useCookie<string | null>('access_token');
  const user = useState<any | null>('user');

  const { data, error } = await useFetch<AuthResponse>(`${runtimeConfig.public.apiBaseUrl}/auth/login`, {
    method: 'POST',
    body: credentials,
  });

  if (error.value) {
    throw new Error(error.value.data.message);
  }

  if (data.value) {
    token.value = data.value.access_token;
    user.value = data.value.user;
    return data.value;
  }
};

export const logout = () => {
  const token = useCookie<string | null>('access_token');
  const user = useState<any | null>('user');
  token.value = null;
  user.value = null;
  return navigateTo('/login');
};

export const useAuthState = () => {
  const token = useCookie<string | null>('access_token');
  const user = useState<any | null>('user');

  return {
    token,
    user,
  };
};