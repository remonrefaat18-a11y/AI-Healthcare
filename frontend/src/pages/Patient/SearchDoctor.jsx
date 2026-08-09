
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import DoctorCard from "../../Components/doctorCard";
import { useNavigate } from "react-router-dom";


export default function SearchDoctor() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("جميع التخصصات");
  const [region, setRegion] = useState("جميع المناطق");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch Doctors Data
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "users"), where("role", "==", "doctor"));
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "غير معروف",
            specialization: data.specialization || "غير محدد",
            location: data.location || "غير محدد",
            price: Number(data.price) || 0,
          };
        });
        setDoctors(list);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Filter Doctors
  const filteredDoctors = doctors.filter((doc) => {
    const term = searchTerm.toLowerCase();

    const matchText =
      term === "" ||
      doc.name.toLowerCase().includes(term) ||
      doc.specialization.toLowerCase().includes(term) ||
      doc.location.toLowerCase().includes(term);

    const matchSpecialty =
      specialty === "جميع التخصصات" ||
      doc.specialization.includes(specialty) ||
      specialty.includes(doc.specialization);

    const matchRegion =
      region === "جميع المناطق" ||
      doc.location.includes(region) ||
      region.includes(doc.location);

    const matchPrice =
      (!minPrice || doc.price >= Number(minPrice)) &&
      (!maxPrice || doc.price <= Number(maxPrice));

    return matchText && matchSpecialty && matchRegion && matchPrice;
  });

  return (
    <div
      className="min-h-screen font-[sans-serif]"
      style={{
        backgroundColor: "#f0f9ff",
        color: "#213547",
      }}
    >
      {/* Nav */}
      <nav className="bg-white shadow-sm flex items-center gap-3 text-right p-3 mb-6">
         <button
      className="px-4 py-2 rounded-xl transition-colors border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/patient/profile")} // هنا تحط المسار لصفحة PatientProfile
    >
      ← العودة
    </button>
        <h3 className="text-2xl font-semibold text-gray-800">البحث عن طبيب</h3>
      </nav>

      {/* Filter section */}
      <section className="bg-white rounded-2xl shadow-sm p-6 m-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          🔍 البحث والتصفية
        </h2>

        <form className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 text-right">
          {/* Search */}
          <div>
            <label className="block text-gray-700 mb-1">البحث</label>
            <input
              type="text"
              placeholder="اسم الطبيب أو التخصص أو المنطقة"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-gray-700 mb-1">التخصص</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
            >
              <option>جميع التخصصات</option>
              <option>اخصائي قلب و اوعية دموية</option>
              <option>عيون</option>
              <option>أطفال</option>
              <option>جلدية</option>
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block text-gray-700 mb-1">المنطقة</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
            >
              <option>جميع المناطق</option>
              <option>القاهرة</option>
              <option>الاسكندرية</option>
              <option>الجيزة</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-gray-700 mb-1">نطاق السعر</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="من"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="number"
                placeholder="إلى"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        </form>

        {/* Reset Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSpecialty("جميع التخصصات");
              setRegion("جميع المناطق");
              setMinPrice("");
              setMaxPrice("");
            }}
            className="border border-gray-400 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 transition"
            style={{ cursor: "pointer" }}
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </section>

      {/* Doctors List */}
      <section className="bg-white rounded-2xl shadow-sm p-6 m-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          🩺 قائمة الأطباء
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {loading ? (
            <p className="text-gray-500 text-center col-span-full">
              جاري التحميل...
            </p>
          ) : filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <DoctorCard
                key={doc.id}
                id={doc.id}
                name={doc.name}
                specialization={doc.specialization}
                location={doc.location}
                price={doc.price}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              لا يوجد أطباء مطابقة للبحث.
            </p>
          )}
        </div>
      </section>
    </div>
  );

}
