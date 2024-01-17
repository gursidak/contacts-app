import { Avatar } from "@mui/material";

// function getRandomHexColor(): string {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

function getStringBasedHexColor(input: string): string {
  // Ensure the input is not empty
  if (!input) {
    return "#000000"; // Default color if input is empty
  }

  // Generate color based on the input string
  const hash = input.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  const color = "#" + ((hash & 0x00FFFFFF).toString(16)).toUpperCase();

  return color.padStart(7, "0"); // Ensure the color has 7 characters
}


function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: getStringBasedHexColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export default function BackgroundLetterAvatar({ name }: { name: string }) {
  return <Avatar {...stringAvatar(name)} />;
}
