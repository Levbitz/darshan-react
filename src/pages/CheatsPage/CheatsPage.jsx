import SingleCheat from "../../components/SingleCheat/SingleCheat";

const CheatsPage = () => {
  return (
    <div className="row">
      <SingleCheat
        cheatTitle="Cheat Fund One"
        cheatDescription=" welcome to cheat one  please enjoy your trading
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error aliquam debitis, minima ducimus nisi perferendis saepe voluptas iure animi.
              "
      >
        <p className="red-text">This cheat has 10 members</p>
      </SingleCheat>

      <SingleCheat
        cheatTitle="Cheat Fund Two"
        cheatDescription=" welcome to cheat two  please enjoy your trading"
      />
      <SingleCheat
        cheatTitle="Cheat Fund Three"
        cheatDescription=" welcome to cheat three  please enjoy your trading"
      />
    </div>
  );
};

export default CheatsPage;
