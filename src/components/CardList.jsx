import Card from "./Card";
import Wrapper from "./UI/Wrapper/Wrapper";
import data from '../data/data.json';

function CardList() {
    return (
        <>
            {data.map((item, index) => (
                <Wrapper key={index}>
                    <Card
                        name={item.name}
                        universe={item.universe}
                        alterego={item.alterego}
                        occupation={item.occupation}
                        friends={item.friends}
                        superpowers={item.superpowers}
                        imgLink={item.url}
                        ratings='rating'
                    />
                </Wrapper>
            ))}
        </>
    );
}

export default CardList;
