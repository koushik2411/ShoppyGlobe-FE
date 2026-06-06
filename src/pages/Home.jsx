import Header from "../components/Header"
import ProductList from "../components/ProductList"
import SearchBar from "../components/SearchBar"

function Home() {
    return (
        <section>
            <Header/>

            <main>

                <SearchBar/>

                <ProductList/>
            </main>
            
        </section>
    )
}

export default Home