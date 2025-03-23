import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<{token: string}> => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }
  
  const data = await response.json();
  return {token: data.token};
};

export { login };
