import { supabase } from "./supabase";

/** Chama a API WydenCoin enviando o token do login. */
export async function api<T>(caminho: string, init: RequestInit = {}): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const resp = await fetch(`${import.meta.env.VITE_API_URL}${caminho}`, {
    ...init,
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session?.access_token ?? ""}`, ...init.headers },
  });
  if (!resp.ok) throw new Error(`API ${resp.status}: ${await resp.text()}`);
  return resp.json() as Promise<T>;
}
