export type PostType = {
  id: number;
  title: string;
  details: string;
  user_id: number;
  user: { name: string };
};
