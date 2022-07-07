import Tile from "../Tile/Tile";

export default function List(props) {
  const { tiles, navigation } = props;

  return (
    <>
      {tiles.map((tile) => (
        <Tile
          id={tile.id}
          key={tile.id}
          title={tile.title}
          lastTimeDate={tile.lastTimeDate}
          colorId={tile.colorId}
          navigate={navigation.navigate}
        />
      ))}
    </>
  );
}
