export const generateRequestId = () => {
    const time = Date.now().toString();
    const randomNumbers = Math.floor(Math.random() * (1000 - 100) + 100);
    return time + randomNumbers.toString();
};
