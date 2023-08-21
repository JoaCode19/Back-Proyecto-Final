async function payOrder(cid) {
  const cidarr = cid.split("carts/");
  const cidt = cidarr[1];
  const FETCH_URL = `http://localhost:8080/api/tickets`;

  try {
    const response = await fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({ cart: cidt }),
      headers: { "Content-Type": "application/json" },
    });

    const ticket = await response.json();

    if (!ticket) {
      // @ts-ignore
      Swal.fire({
        toast: true,
        showConfirmButton: true,
        title: `Purchase Failure`,
        icon: "error",
        background: "#600252",
        color: "#fff",
        confirmButtonColor: "#01657ed1",
      });
      return;
    }

    location.href = `/ticket/${ticket.code}?cart=${cidt}`;

    // @ts-ignore
    await Swal.fire({
      title: "Purchase Confirmed",
      text: "Your purchase has been successfully confirmed.",
      icon: "success",
      showConfirmButton: false,
      background: "#bd9cfa",
      color: "#fff",
      customClass: {
        popup: "custom-swal-popup",
      },
      timer: 3000,
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
