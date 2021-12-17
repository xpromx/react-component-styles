import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const PostCard = style({
  display: "block",
  margin: "50px",
  borderRadius: "6px",
  boxShadow: "0 4px 4px rgba(192, 189, 189, 0.25)",
  height: "500px",
  overflow: "hidden",
  "@media": {
    "screen and (min-width: 600px)": {
      display: "flex",
      height: "auto",
    },
  },
});

export const PostCardImage = style({
  width: "100%",
  height: "300px",
  objectPosition: "center",
  objectFit: "cover",
  "@media": {
    "screen and (min-width: 600px)": {
      marginRight: vars.spacing[3],
    },
  },
});

export const PostCardBody = style({
  padding: vars.spacing[3],
});

export const PostCardTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: "bold",
  textTransform: "capitalize",
  marginBottom: vars.spacing[3],
});

export const PostCardText = style({
  fontSize: vars.fontSize.md,
  color: vars.color.gray,
});
