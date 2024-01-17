import { Avatar } from "@mui/material";

function getRandomHexColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: getRandomHexColor(),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export default function BackgroundLetterAvatar({ name }: { name: string }) {
  return <Avatar {...stringAvatar(name)} />;
}
