// import { useLocation, useNavigate } from "react-router-dom";
// import React from "react";

// export const useUrlParams = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [values, setValues] = React.useState<{ [key: string]: string }>({});

//   React.useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const obj: Record<string, string> = {};
//     for (const [key, value] of params.entries()) {
//       obj[key] = value;
//     }
//     setValues(obj);
//   }, [location.search]);

//   function updateParam({
//     key,
//     value,
//     replace = true,
//   }: {
//     key: string;
//     value: string;
//     replace?: boolean;
//   }) {
//     const params = new URLSearchParams(location.search);
//     params.set(key, value);
//     const newSearch = `?${params.toString()}`;
//     const newUrl = location.pathname + newSearch;

//     if (replace) {
//       navigate(newUrl, { replace: true });
//     } else {
//       navigate(newUrl);
//     }

//     setValues((prev) => ({ ...prev, [key]: value }));
//   }

//   return { value: values, updateParam };
// };
