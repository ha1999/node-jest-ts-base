const users: Record<number, Object | undefined> = {
  4: { name: "Mark", age: 18 },
  5: { name: "Paul", age: 20 },
};

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.slice("/users/".length), 10);
    process.nextTick(() => {
      const user = users[userID];
      user
        ? resolve(user)
        : reject({
            error: `User with ${userID} not found.`,
          });
    });
  });
}
