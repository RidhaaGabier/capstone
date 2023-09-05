<template lang="">
    <div>
        <h1 class="text-black">Product List</h1>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Product Image</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <!-- Sample data, replace with your actual product data -->
            <tr>
                <td>1</td>
                <td>Product A</td>
                <td>R50.00</td>
                <td><img src="product_a.jpg" alt="Product A"></td>
                <td><button class="edit-btn">Edit</button></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Product B</td>
                <td>R35.00</td>
                <td><img src="product_b.jpg" alt="Product B"></td>
                <td><button class="edit-btn">Edit</button></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            <!-- Add more rows as needed -->
        </tbody>
    </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      /* Add your CSS styling here */
      table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        img {
            max-width: 100px;
            max-height: 100px;
        }
        .edit-btn, .delete-btn {
            padding: 5px 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        .delete-btn {
            background-color: #DC3545;
        }
        .text-black{
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
  
}
</style>