import request from "./request";

export async function getUserName(userId: number) {
  const user = await request<{ name: string }>(`/users/${userId}`);
  return user.name;
}

export async function getUserAge(userId: number) {
  const user = await request<{ age: number }>(`/users/${userId}`);
  return user.age;
}
