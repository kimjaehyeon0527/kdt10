// 이름, 학년, 과목
interface studentInfo {
  name: string;
  grade: number;
  subject?: string; // optional
  handleClick: (name: string, grade: number) => void;
}

function Student({ name, grade, subject, handleClick }: studentInfo) {
  return (
    <ul onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>과목: {subject}</li>
    </ul>
  );
}

export default Student;
