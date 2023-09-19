interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    token?: string;
  }
  
  const users: User[] = [
    { id: 1, username: 'admin', password: '123123',email: 'admin@example.com' },
    { id: 2, username: 'user1', password: '123123',email: 'user1@example.com' },
    { id: 3, username: 'user2', password: '123123@e',email: 'test@1'},
  ];
  
  let currentUser: User | null = null;
  
  export function login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log(email, password);
      // Simulate authentication API delay of 1 second
      setTimeout(() => {
        // Find the user with the provided username
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
          
        if (user) {
          // Generate a random token for the user
          const token = Math.random().toString(36).substr(2);
          currentUser = { ...user, token };
          resolve(token);
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000);
    });
  }
  
  export function logout(): Promise<void> {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      localStorage.removeItem("acceptPolicy");
      currentUser = null;
      window.location.href = '/';
      resolve();
    });
  }
  
  export function getCurrentUser(): User | null {
    return currentUser;
  }
  