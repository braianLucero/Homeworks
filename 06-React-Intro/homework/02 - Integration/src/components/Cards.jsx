import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
               {characters.map((valor,indice) => {
               return (
                  <Card key = {indice} 
                  name = {valor.name}
                  species={valor.species}
                  gender={valor.gender}
                  image={valor.image}
                  />
                  
               ) 
               })}

          </div>;
}
