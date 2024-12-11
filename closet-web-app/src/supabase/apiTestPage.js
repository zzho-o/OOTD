import React, { useEffect, useState } from "react";
// import Button from "../components/Button";
// import { ButtonType } from "../config/globalStyles";
import { supabase } from "./supabaseClient";

const ApiTestPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [apiData, setApiData] = useState(null);
  const [tableName, setTableName] = useState("TestTable");
  const [count, setCount] = useState(0);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // 페이지 로드 시 로그인 상태 확인
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setLoggedIn(true);
        setUserInfo(session.user);
      }
    };

    fetchSession();
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("TestTable").select("*");

    console.log(data);
    setCountries(data);
  }

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      console.error(error);
    } else {
      setLoggedIn(true);
      setUserInfo(data.user);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Logout failed: " + error.message);
      console.error(error);
    } else {
      setLoggedIn(false);
      setUserInfo(null);
    }
  };

  const selectApi = async () => {
    const { data, error } = await supabase.from(tableName).select("*");

    if (error) {
      alert("API call failed: " + error.message);
      console.error(error);
    } else {
      setApiData(data);
      console.log(data);
    }
  };

  const insertApi = async () => {
    const { data, error } = await supabase
      .from(tableName)
      .insert([{ title: `테스트${count}` }])
      .select();

    if (error) {
      alert("API call failed: " + error.message);
      console.error(error);
    } else {
      setApiData(data);
      setCount(count + 1);
    }
  };

  const updateApi = async () => {
    const { data, error } = await supabase
      .from(tableName)
      .update({
        title: `업데이트 테스트`,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1)
      .select();

    if (error) {
      alert("API call failed: " + error.message);
      console.error(error);
    } else {
      setApiData(data);
    }
  };

  const deleteApi = async () => {
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq("title", "업데이트 테스트") // 특정 레코드 지정
      .select();

    if (error) {
      alert("API call failed: " + error.message);
      console(error);
    } else {
      setApiData(data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Supabase Test Page</h1>
      <a
        href="https://supabase.com/dashboard/project/irhyccyvqukjdixhibun/api?page=tables-intro"
        target="blank"
      >
        SUPABASAE API Docs
      </a>

      <hr style={{ marginTop: "20px" }}></hr>
      <h2>Login</h2>
      {!loggedIn ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h3>Logged in as: {userInfo.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <hr style={{ marginTop: "20px" }}></hr>
      <h3>TopSearch 테이블</h3>
      <ul>
        {countries.map(country => (
          <li key={country.id}>{country.title}</li>
        ))}
      </ul>

      <hr style={{ marginTop: "20px" }}></hr>
      <h2>API Test</h2>
      <h4>현재 테이블 명 {tableName}</h4>
      <div>
        <button onClick={selectApi}>select API</button>
        <button onClick={insertApi}>insert API</button>
        <button onClick={updateApi}>update API</button>
        <button onClick={deleteApi}>delete API</button>
      </div>

      {apiData && (
        <div>
          <h3>API Data:</h3>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiTestPage;
