export interface Class {
    name: string;
    type: string;
    subjects: { name: string; teacher: string }[];
    studentCount: number;
    classTeacher: string;
    departments?: string[] | null;
  }
  