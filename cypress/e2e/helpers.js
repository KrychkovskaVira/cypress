function generateRandomString(minLength, maxLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

function generateRandomUsername() {
  return generateRandomString(1, 10);
}

function generateRandomDomain() {
  return generateRandomString(5, 10);
}

function generateRandomTLD() {
  const tlds = ['com', 'org', 'net', 'gov', 'edu']; 
  const randomIndex = Math.floor(Math.random() * tlds.length);
  return tlds[randomIndex];
}

function generateRandomEmail() {
  const randomUsername = generateRandomUsername();
  const randomDomain = generateRandomDomain();
  const randomTLD = generateRandomTLD();
  return `${randomUsername}@${randomDomain}.${randomTLD}`;
}

const randomEmail = generateRandomEmail();
module.exports = { generateRandomString, generateRandomEmail };
