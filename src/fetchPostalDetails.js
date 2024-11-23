

export async function fetchPostalCode(pincode) {
  try {
    console.log(pincode);
    
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);

    if (!res.ok) {
      throw new Error('Network error!');
    }

    const data = await res.json();
console.log(data);

    return { success: true, data };
  } catch(err) {
    alert(`Error: ${err.message}`);
    return { success: false };
  }
}