export type TodoType = {
  id: number;
  user_id: number;
  title: string;
  details: string;
};

export type PostType = {
  id: number;
  title: string;
  details: string;
  user_id: number;
  user: { name: string };
};
