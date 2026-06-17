function calculateGST() {

    const amount =
        parseFloat(
            document.getElementById("amount").value
        );

    const gstRate =
        parseFloat(
            document.getElementById("gst").value
        );

    const result =
        document.getElementById("result");

    if (
        isNaN(amount) ||
        isNaN(gstRate) ||
        amount <= 0 ||
        gstRate < 0
    ) {

        result.innerHTML = `
            <div class="result-card">
                <p>Please enter valid values.</p>
            </div>
        `;

        return;
    }

    const gstAmount =
        (amount * gstRate) / 100;

    const totalAmount =
        amount + gstAmount;

    const cgst =
        gstAmount / 2;

    const sgst =
        gstAmount / 2;

    result.innerHTML = `

        <div class="result-card">

            <p>
                <strong>Original Amount:</strong>
                ₹${amount.toFixed(2)}
            </p>

            <p>
                <strong>GST Amount:</strong>
                ₹${gstAmount.toFixed(2)}
            </p>

            <p>
                <strong>CGST:</strong>
                ₹${cgst.toFixed(2)}
            </p>

            <p>
                <strong>SGST:</strong>
                ₹${sgst.toFixed(2)}
            </p>

            <p>
                <strong>Total Amount:</strong>
                ₹${totalAmount.toFixed(2)}
            </p>

        </div>

    `;
}

function resetForm() {

    document.getElementById("amount").value = "";

    document.getElementById("gst").value = "";

    document.getElementById("result").innerHTML = "";

}