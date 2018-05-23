$(function(){

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");

    //doughnut chart data
    var data1 = {
        labels: ["Remaining", "Eaten"],
        datasets: [
            {
                label: "Calories Eaten",
                data: [500, 1500],
                backgroundColor: [
                    "#DC143C",
                    "#2E8B57"
                ],
                borderColor: [
                    "#CB252B",
                    "#1D7A46"
                ],
                borderWidth: [1, 1, 1, 1, 1]
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Calories Eaten",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

});