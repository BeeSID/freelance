import React from "react";

const mavattanirvagamData = [
  { id: 1, name: "அருண்", position: "மாநிலத் தலைவர்", district: "சென்னை", phone: "9876543210" },
  { id: 2, name: "ரமேஷ்", position: "மாவட்ட செயலாளர்", district: "திருச்சி", phone: "9876501234" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
  { id: 3, name: "சிவா", position: "அமைச்சர்", district: "மதுரை", phone: "9876512345" },
];

const Mavattanirvagam = () => {
  return (
    <div className="p-4 pt-24 md:p-6 md:pt-52">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">நிர்வாக பட்டியல்</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300" aria-label="நிர்வாக பட்டியல்">
          <thead className="bg-green-100">
            <tr>
              <th scope="col" className="border px-2 py-1 md:px-4 md:py-2">#</th>
              <th scope="col" className="border px-2 py-1 md:px-4 md:py-2">பெயர்</th>
              <th scope="col" className="border px-2 py-1 md:px-4 md:py-2">பதவி</th>
              <th scope="col" className="border px-2 py-1 md:px-4 md:py-2">மாவட்டம்</th>
              <th scope="col" className="border px-2 py-1 md:px-4 md:py-2">தொலைபேசி</th>
            </tr>
          </thead>
          <tbody>
            {mavattanirvagamData.map((member) => (
              <tr key={member.id} className="hover:bg-gray-100">
                <td className="border px-2 py-1 md:px-4 md:py-2">{member.id}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{member.name}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{member.position}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{member.district}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  <a href={`tel:${member.phone}`} className="text-blue-600 hover:underline">
                    {member.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mavattanirvagam;
