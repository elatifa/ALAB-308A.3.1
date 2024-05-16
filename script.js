// Step 1: Get the database name from the central database
const central = async (id) => {
    // Simulate a database query
    const dbName = await new Promise((resolve) => {
      setTimeout(() => {
        // Return a database name based on the id
        if (id <= 3) {
          resolve('db1');
        } else if (id <= 6) {
          resolve('db2');
        } else {
          resolve('db3');
        }
      }, 1000); // Simulate a 1-second delay
    });
    return dbName;
  };
  
  // Define the databases (db1, db2, and db3) as Promise-based functions
  
  const db1 = async (id) => {
    const userInfo = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: `user${id}`,
          website: `website${id}.com`,
          company: `company${id}`,
        });
      }, 1000); // Simulate a 1-second delay
    });
    return userInfo;
  };
  
  const db2 = async (id) => {
    const userInfo = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: `user${id + 3}`,
          website: `website${id + 3}.com`,
          company: `company${id + 3}`,
        });
      }, 1000); // Simulate a 1-second delay
    });
    return userInfo;
  };
  
  const db3 = async (id) => {
    const userInfo = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          username: `user${id + 6}`,
          website: `website${id + 6}.com`,
          company: `company${id + 6}`,
        });
      }, 1000); // Simulate a 1-second delay
    });
    return userInfo;
  };
  
  // Create an object to store the databases
  async function main() {
    const dbs = {
      db1,
      db2,
      db3,
    }
  
    const dbName = await central(1); // Replace with the actual user ID
    const id = 1; // Replace with the actual user ID
  
    const basicInfo = await dbs[dbName](id);
    console.log(basicInfo);
  }
  
  main().catch((err) => {
    console.error(err);
  });