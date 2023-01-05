import SingleCheat from "../../components/SingleCheat/SingleCheat";

const cheatData = [
  {
    id: 1,
    chitName: "Cheat Fund One",
    chitDes:
      "welcome to cheat one  please enjoy your trading Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error aliquam debitis, minima ducimus nisi perferendis saepe voluptas iure animi",
    chitMember: "This cheat has 10 members",
  },
  {
    id: 2,
    chitName: "Cheat Fund Two",
    chitDes: " welcome to cheat two  please enjoy your trading",
  },
  {
    id: 3,
    chitName: "Cheat Fund three",
    chitDes: " welcome to cheat three  please enjoy your trading",
    chitMember: "This cheat has 1000 members",
  },
  {
    id: 4,
    chitName: "Cheat Fund four",
    chitDes: " welcome to cheat three  please enjoy your trading",
  },
];

const CheatsPage = () => {
  return (
    <div className="row">
      {cheatData.map((chit) => {
        return (
          <>
            <SingleCheat
              cheatTitle={chit.chitName}
              cheatDescription={chit.chitDes}
            >
              {chit.chitMember ? (
                <button className="btn">{chit.chitMember}</button>
              ) : (
                <h5>This chit Has No member</h5>
              )}
            </SingleCheat>
          </>
        );
      })}
    </div>
  );
};

export default CheatsPage;
