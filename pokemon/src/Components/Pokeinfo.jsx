import React from "react";

const Pokeinfo = ({ data }) => {
  console.log(data);
  return (
    <div>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={data.sprites.other.dream_world.front_default}
            alt=""
          />
          <div className="abilities">
            {
                data.abilities.map(poke => {
                    return (
                        <>  
                            <div className="group">
                                <h2>{poke.ability.name}</h2>
                            </div>
                        </>
                    )
                })
            }
          </div>
          <div className="base-stats">
            {
                data.stats.map(pokeStat => {
                    return (
                        <>
                            <h3>{pokeStat.stat.name}:{pokeStat.base_stat}</h3>
                        </>
                    )                    
                })
            }
          </div>
        </>
      )}
    </div>
  );
};

export default Pokeinfo;
