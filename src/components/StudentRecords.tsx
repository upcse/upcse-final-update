// Update the StudentRecord interface and mockData to include district
interface StudentRecord {
  id: number;
  name: string;
  fatherName: string;
  dateOfBirth: string;
  game: string;
  event: string;
  rank: string;
  certificateNo: string;
  yearMonth: string;
  district: string;
}

const mockData: StudentRecord[] = [
  {
    id: 1,
    name: "Aarav Kumar",
    fatherName: "Rajesh Kumar",
    dateOfBirth: "15-05-2005",
    game: "Athletics",
    event: "100m Sprint",
    rank: "1st",
    certificateNo: "AT23001",
    yearMonth: "Mar 2023",
    district: "Lucknow"
  },
  // ... Add district to all other records
];

export default mockData