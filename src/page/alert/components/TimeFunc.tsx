export function formatDateTime(dateTimeString: string) {
  const dateTime = new Date(dateTimeString);

  const day = dateTime.getDate().toString().padStart(2, "0");
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Ay 0-11 aralığında olduğu için +1 ekliyoruz
  const year = dateTime.getFullYear().toString().slice(-2); // Son iki hane alınıyor

  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const seconds = dateTime.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return `${formattedDate}  ${formattedTime}`;
}

/*   const inputDateTime = "2023-08-22T12:35:26.075087Z";
  const formattedOutput = formatDateTime(inputDateTime); */
