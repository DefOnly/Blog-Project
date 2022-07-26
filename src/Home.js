import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/dataContext";
import Nav from "./Nav";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    < >
    <Nav />
   
      <main className="Home">
        {
          isLoading && (
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          )
          /* {searchResults.length ? (
            <Feed searchResults={searchResults} />
            ) : (
                <p style={{marginTop: "2rem"}}>
                No post to display
            </p>
        )} */
        }
        {!isLoading && fetchError && (
          <p className="statusMsg" style={{ color: "red", fontWeight: "bold" }}>
            {fetchError}
          </p>
        )}
        {!isLoading &&
          !fetchError &&
          (searchResults.length ? (
            <Feed posts={searchResults} />
          ) : (
            <p className="statusMsg">No posts to display</p>
          ))}
      </main>
      </>
  );
};

export default Home;
