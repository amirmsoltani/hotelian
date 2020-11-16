export interface CommentModel {
  submit_date: string;
  title: string;
  score_description: string;
  score_average: number;
  comment: string;
  user_name: string;
  country?: string;
  booked: boolean;
  stay_time?: string;
  nights_count?: number;
}
