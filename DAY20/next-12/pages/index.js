import Card from "../components/Card";

export default function Home({ animals }) {
  console.log(animals)
  return (
    <>
      <ul>
        {animals.map((el) => (
          <Card key={el.id} animal={el} />
        ))}
      </ul>
    </>
  );
}

// getStaticProps -> 잘 변하지 않는 데이터를 받아올 때
// getStaticPaths -> 잘 변하지 않는 데이터를 받아오지만, 동작 라우팅 필요할 때
// getServerSideProps -> 잘 변하는 데이터를 받아올 때

export async function getStaticProps(){
  const res = await fetch ('http://localhost:3000/api/animal')
  const data = await res.json()

  return{
    props: {
      animals: data
    }
  }
}