const Cart = () => {
    const prixMonstera = 8
    const prixLierre = 10
    const prixBouquetDeFleurs = 15
    return <div>
      <h2>Panier</h2>
      <ul>
        <li>monstera {prixMonstera} €</li>
        <li>lierre {prixLierre} €</li>
        <li>bouquet de fleurs {prixBouquetDeFleurs} €</li>
      </ul>
      <p>Total : {prixMonstera + prixLierre + prixBouquetDeFleurs} €</p>
    </div>
  }

  export default Cart