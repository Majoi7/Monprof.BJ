export default function CourseCard({ professor, subject, date, status }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md flex justify-between items-center">
      <div>
        <div className="font-semibold">{subject} - {professor}</div>
        <div className="text-gray-500">{date}</div>
      </div>
      <div className="text-sm">{status}</div>
    </div>
  );
}
