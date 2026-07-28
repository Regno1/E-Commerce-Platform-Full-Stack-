const Profile = () => {
  return (
    <div className="min-h-[80vh] py-10 px-12 max-w-[1200px] mx-auto bg-[#f5f0eb]">
      <h1 className="font-['Outfit'] text-[1.8rem] font-black text-[#1e2028] mb-7 flex items-center gap-3 before:content-[''] before:inline-block before:w-[5px] before:h-[1.5em] before:bg-[#ed8a63] before:rounded-full before:shrink-0">
        My Profile
      </h1>

      {/* Profile Header */}
      <div className="bg-[#3a4660] border-none rounded-[28px] px-10 py-9 flex items-center gap-7 mb-6 shadow-[0_8px_28px_rgba(58,70,96,0.14)]">
        <div className="w-[74px] h-[74px] rounded-full bg-[#ed8a63] flex items-center justify-center font-['Outfit'] text-[1.9rem] font-black text-white shrink-0 shadow-[0_6px_20px_rgba(237,138,99,0.32)] border-[3px] border-[#c9af98]">
          U
        </div>
        <div>
          <h2 className="font-['Outfit'] text-[1.3rem] font-black text-[#e5d8cc] mb-0.5">Guest User</h2>
          <p className="text-[rgba(201,175,152,0.65)] text-sm">guest@shopease.com</p>
        </div>
      </div>

      {/* Placeholder */}
      <div className="min-h-[30vh] flex flex-col items-center justify-center gap-4 text-center bg-white border-2 border-[#e0d5c8] rounded-[20px] p-10 shadow-[0_8px_28px_rgba(58,70,96,0.14)]">
        <div className="text-[3.5rem]">⚙️</div>
        <h2 className="font-['Outfit'] text-xl font-black text-[#1e2028]">Profile Settings</h2>
        <p className="text-[#7a7060] text-sm max-w-sm">
          Manage your account details, saved addresses, and preferences here.
        </p>
      </div>
    </div>
  );
};

export default Profile;