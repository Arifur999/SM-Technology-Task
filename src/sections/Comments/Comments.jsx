import avatar from "/Ellipse 6.png";
import avatar1 from "/Ellipse 6 (1).png";
import avatar2 from "/Ellipse 6 (2).png";

const Comments = () => {
  const profiles = [
    {
      name: "Pierre Hackett",
      title: "VP of Engineering",
      image: avatar2,
    },
    {
      name: "Natalia Sanz",
      title: "Head of Technology",
      image: avatar1,
    },
    {
      name: "Ece Akman",
      title: "Senior Marketer",
      image: avatar,
    },
  ];

  return (
    <div
      className="lg:w-[850px] mx-auto p-4 mb-6 text-center lg:mb-12 leading-snug space-y-2"
      data-aos="fade-up"
    >
      <p className="font-semibold text-[#8D448B]">Customer Comments</p>
      <h1 className="font-semibold text-2xl pb-6">Why customers love us</h1>
      <p className="Playfair text-2xl space-y-1">
        They are doing amazing job with hundred percent <br /> customer
        satisfaction, Love their work and would <br /> like to work with them
        again
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="w-[227px] h-[58px]  flex items-center hover:border-t-2  border-[#8D448B] gap-3 my-1 lg:my-10  p-6  "
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[#6366F1]"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 leading-5">
                {profile.name}
              </h3>
              <p className="text-xs text-gray-500">{profile.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
