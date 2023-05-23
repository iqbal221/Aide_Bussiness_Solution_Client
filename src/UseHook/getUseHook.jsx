import { useEffect, useState } from "react";

const getUseHook = (email) => {
  const [isUser, setIsUser] = useState(false);


  useEffect(() => {
    if (email) {
      fetch(`https://aide-bussiness-solution-server.vercel.app/api/v1/GetUserInfo/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data?.isAdmin) {
            setIsAdmin(data.isAdmin);
          }

          if (data?.isUser) {
            setIsUser(data.isUser);
          }

          if (data?.isSeller) {
            setIsSeller(data.isSeller);
          }
        });
    }
  }, [email]);

  return [isAdmin, isUser, isSeller];
};

export default getUseHook;
