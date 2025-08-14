
        let income_categories = document.getElementById('income_categories');
        let expence_categories = document.getElementById('expence_categories');
        let income_graph = document.getElementById('graph');
        let expence_canvas = document.getElementById('expence_canvas');
        let transectionaddbtn = document.getElementById('transectionaddbtn');
        let add_categories = document.getElementById('add_categories');
        let income_graph_data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Income',
                data: [10000, 20000, 30000, 40000, 50000, 60000],
                backgroundColor: [
                    'rgba(80, 206, 206, 0.2)',
                ],
                borderColor: [
                    'rgba(80, 206, 206, 1)',
                ],
                borderWidth: 1
            }]
        };
        let expence_graph_data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Expence',
                data: [5000, 10000, 3000, 20000, 10000, 90000],
                backgroundColor: [
                    'rgba(252, 125, 122, 0.2)',
                ],
                borderColor: [
                    'rgba(252, 125, 122, 1)',
                ],
                borderWidth: 1
            }]
        };
        let income_graph_options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        let expence_graph_options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        let income_graph_chart = new Chart(income_graph, {
            type: 'line',
            data: income_graph_data,
            options: income_graph_options
        });
        let expence_graph_chart = new Chart(expence_canvas, {
            type: 'line',
            data: expence_graph_data,
            options: expence_graph_options
        });
        income_categories.addEventListener('change', ()=>{
            if(income_categories.value == 'all'){
                income_graph_data.datasets[0].data = [10000, 20000, 30000, 40000, 50000, 60000];
                income_graph_data.datasets[0].backgroundColor = ['rgba(80, 206, 206, 0.2)'];
                income_graph_data.datasets[0].borderColor = ['rgba(80, 206, 206, 1)'];
                income_graph_chart.update();
            }
            else if(income_categories.value == 'salary'){
                income_graph_data.datasets[0].data = [10000, 20000, 30000, 40000, 50000, 60000];
                income_graph_data.datasets[0].backgroundColor = ['rgba(80, 206, 206, 0.2)'];
                income_graph_data.datasets[0].borderColor = ['rgba(80, 206, 206, 1)'];
                income_graph_chart.update();
            }
            else if(income_categories.value == 'business'){
                income_graph_data.datasets[0].data = [10000, 20000, 30000, 40000, 50000, 60000];
                income_graph_data.datasets[0].backgroundColor = ['rgba(80, 206, 206, 0.2)'];
                income_graph_data.datasets[0].borderColor = ['rgba(80, 206, 206, 1)'];
                income_graph_chart.update();
            }
            else if(income_categories.value == 'other'){
                income_graph_data.datasets[0].data = [10000, 20000, 30000, 40000, 50000, 60000];
                income_graph_data.datasets[0].backgroundColor = ['rgba(80, 206, 206, 0.2)'];
                income_graph_data.datasets[0].borderColor = ['rgba(80, 206, 206, 1)'];
                income_graph_chart.update();
            }
        });