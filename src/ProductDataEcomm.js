import axios from 'axios'
import React, { Component } from 'react'

export default class ProductDataEcomm extends Component {
    constructor(){
        super()
        this.state={products:[]}

    }
    render() {
    return (
        <div class="products">
        {

            this.state.products.map((prod) => {

                return (
                    <div>
                        {/* <ul>
                            <li>
                                {prod.name}
                            </li>
                            <li>
                                {prod.price}
                            </li>
                        </ul> */}
                        <div class="products card" >
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xAA9EAABAwIEBAMGBAQEBwAAAAABAAIDBBEFEiExBkFhcRNRgQcUIjJCkSNSobHB0eHwJFRi8RUlM0NygqL/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAYF/8QAKhEAAgIBAwIEBgMAAAAAAAAAAAECAxEEITEFEkFCUXETIiMyodFhgfD/2gAMAwEAAhEDEQA/ALxQhCABCwVxq6ymo4jLVzxwxg2zSODRdAJNvCO6E0U3E2CVU4hgxSmfITYNz2unYHVGR0oSh9ywZQsHZRocdcOulextfmDHFpeI3FtwbHWyRtLkWFU7PsWSTISWhxCjxCDxqGpinj/NG64CVDZKNaaeGCEIQICEIQAIQhAAhCwSgBJikNRU0csNHVmjmcLNnEYfk9DoVTGO4nU1eLyU1Rib8SjpPw2TlgYH6DMQ0ab8+il3tM4r92jdguHSWnkH+JkafkafpHU/oO6q6nf4dcQQMrgLDy0Ve2WdkaXo2llDF01zx+xnxXFJaHGKhsJ/CJGYcgbC/wCt1bvsj4xlxH/lGIyhz8hdSyE7gbs9BqOl/JUrxNA+LFZc4OWSz2nzFv53W/DeLuw6rjcJHRvjeHRyA6tIO6I7bojv+tOVVj9v4Z6a4u4gpMAwiaaqdmkexzYYWn4pDb9B5lUZTObT4Wc1skcdrW5ZSl2JVtXxFiT67EagSsc2wDDYAflaOS4yRNEZiEcYYRYsLS7TqmWWdzOj03QvT1vxkxj4a4nr8NrYqmlkLXxEE5T84G7T5gr0/SVEdVSw1ELg6OVjXtI5gi68s4zTQ4VLT1NPHlY5xD2gm3fVWT7P/aDFRYd7jUtM8LGnwC0/Ew/kN+V+fLspITS9jla3SWWbczX5RcV0BVLW8dY3VPd7vLDSx30DGAn9f6KY+z/GazF8MqDiErJZ4JsucNyktLQRcDrdPjZGTwilqOmX6er4k8YJUhYCypDnghCEACaOIK+SkwqvmpTeSngfJoL6gEhOVS8xwPcNwE0izHXtma4Wc0i90YyLFpNNlESOfJI6SVznyPJc5zjcuJ3JKTVYLZInt5NsPT+wpZxfwvPg1RLU0cL34Y7Vr2i/g/6Xcx0Kis5uGHycR2v/ALKm4tPc3Vd9d0Izre3+QVDafEqYMqY8zmbG9i3sUyScPeLKPdqmOx+mW7XAemhTyzQ3W0ejhprdIpNC3aSq7eS3FOERQQQtpoST4ZIfnN3ed+oPJKXy5iSNEjb+HLniGXmC3TT+/wCC28ckGSZjGNJNiX2zdgASm8lmpqEe3ByxWmjrKQxytc4XDrM+a/RIcMihw9wga5zg85mPc0AtdtbQ7Ead0udWiJ7XCJxDTe7XHl3ASI3lDmnzuORAOoI/RG6WCGyquVnxEtx8Y5wsHDKfJSz2eYm+kx6OnLj4VWDG5t/qGrT+/wB1B4ZpzG6SoiGWJoaHDVztdNLhL8DxGSixzDastyxx1ceckC+UuANvQpY7SyN1iVunnFrwPQYWVhqyrxggQhCANJoxLG6N2zhY2Vd8Q8X1GBY0MNlwl9Rdrcj2PIMh55RlN1Y6YeJuHYsZNLURy+BW0kzZYJsubY3ykcwUjzjYn07qU/qrKI1hXHGHV9WKCtpJ6R0wyFtS0ZHX+k6316hQXjXh9+AYlJHGCaSb8Smcfyhwu0nzbe3axVm47hdPjNNLQ17Q2QE+HKR8UTuR7fuExxQScS4DWcN4raPG8PFo5JPq0syQHm1wNifXdNnFvZnQ02ohX9SpYXmWc/2isGAncLq1vxLeoppaOrlpqhhZNE8se08iDZbkZmhwGrRr2/uw9Qqpq4TUkmjLLtsQL2N9lmoqY6iaNroJS5ujS1osem6IZCCu7Kj3cPPhl4tcBo/iUxkj9UJJ3wZct2g972PoD+6QvcPFiLLlgYGtcRa9iR/RLXvgZGC6PI53xeFm5ctgkMjs7RkYWMjJJBt9R3+4SjZPLQraKjNanykOGodsR3K3qvEaySMMBs0jyBNvLe3qtYifDGR2U2IuuhZMxjXPk8QvNr7ZbdrE/fkhCNPg9B4JVRVuFUtRC5rmviafhdcA21HcHRLlB/ZFM93DU0Ehv7vWSMabbggO/dxU4V2LykzBamv4V0oejBCEJxCCEIQAjr6FlW3MDllaLB3n0PRQ7HqGqL4sRoGluM4dctb/AJiP6onedxqOu26nqRYjR+8tD4/hmZq13n0KXnZjoTcJdyKv4yo6XHMJg4qwoH4mhtUzmANLnq06HprsFDorXBt6easjAGtpuLceweSO1JUMbUmE7NLwA8dL5tuir/EaGbCcUqaCcEOhkLWuP1N+k+osVVsj5jVdMv5ozwk17P8AQmylryPt2XYOOW7fmbqFhw1B/VdoMmYDLc8iSoWdxPKEtRL40mc05LrWzlwBPdIqgyeHJaNgDhrbU2BunN8YeSdr8hstBE1vK/dIL27CKk1YBcLs+KUOu2R2o0F9PsuOX3eYt+k6tPRLg68bTy2SiYTJX7M8bOF4k6hq32p61wDST8suw++g9AreC87a8tD5q4OA+IxjWH+BUv8A8dTACS+8jeT/AOfXuFYpn5WZjreh7ZfHgtnz+yVIWAsqczwIQhAAhCEANGK0FKyoGJtp2+9BvhPlaNTHe9j5gEDsojxvw+/FqVtbRxh1dTt1a3eWPy6kbj1HkrEIuLFMlewUMzXWIgebB/Jh8j5A8vt5XGk1hktN06bFZB7opFpzx25jzW0d8w0O6sLiXhBmJyPrcKc2GsdrJEdGTdf9Luux/VQCspqmgqHQ1sEsErTq17SPt5jqFUnBxNnotdVqY/K9/Q2doSOq1kFjboFhkrhaxXR7szjmA7qM6SYlqIvFbbYjYnzSennLfwyLEGxulzgO/dJZKF9TOz3csEzjls92UO8tToPVA2T7Vk7tdmCU4ZiNThOIRVtG60sZ2OzhzaehTc9lRQ1LqWugkp52/NHK2zh16jrsuziDYjmAl3TGPsthjlMvjAMYpscw6OspCQHaPYd43c2lOao7hDiB/D+Ktle4+5y2bUt5W5O7j9r9Fd7XBzQ4EEHYjmrcJ9yMT1DRPSW48r4NkIQnlAEIWCQN0ABNlymLHMcyRuZrhYgi4IWzpmN3Nlwkr4GfM79EANE0L6J+anD5oN/D+uP/AMfzDpv32XCqpsL4gpfCqmR1DWH6rtfEe+7T0TpLjVEz5gT/AOqa6/FMGqnB08D/ABGizZWXY9vZwsUD4zcX3LZkQxT2f1EJMmEVIlZyhnsHjs7Y+oCi1bTVWHzmGvppaeT8sjbX7eforHfjBgN6WqfOwf8Abqmanpnb/FpPVdW49h9bEYMSpsjDuyWMSR976getlFKpPg7Om6zfXhWfMvyVfcFauA2KnVVwpgeK5pMFxBsD/wAsbxNHfte4+6j+K8L12FwvqJ56J0DSB4glsSTsMpF7qGVUkd2jqmnu2zh+jHXBsSw3GsMGGcSNie6H/oyyuyutto7cEbb63G60qeAY3fHhWLAxHZlS2/8A9N/kk3s/opaziGN9P8cEIJqHW+HKRo3udPtdWi7AcJe4udh9MSdz4Q1UsEpR3Rw9bqJaTUtUSwnvjwz7FLV+Dy0lfFh8dRT1tZLcCCkcXuHfTT1V24HSzUWD0VLUvEk0MLWPcOZAst6LC6Ggv7lRwU99/CjDb/ZK7J8IKLKGs189Uoxl4GUIQnlEEIQgDBaDuAtTDGd2N+y3QgDg6jp3bxNPouRwyjdvAz7JYhACA4PQHemZ9lr/AMEw/wDyzU4oQA0y8O4VNbxaKF9tszQbLjUcJ4LUlvvNCJgz5RK9zgOwJsnxCMDlOUeGJqKhpaCEQ0cEcEQ2ZG0NA9AlCyhA1vO7BCEIA//Z" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{prod.name}</h5>
                            <p class="card-text">
                            {prod.price}
                                </p>
                                <p class="card-text">
                            {prod.description}
                                </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    
                )
                
            })
        }


    </div>
    )
  }
  componentDidMount(){
  
    //external interaction
    axios.get('https://justolearnapp.herokuapp.com/api/addproduct').then(response=>{
        console.log("response",response)
        this.setState({products:response.data.result})
        console.log("products",this.state.products)

    }).catch(error=>{
        console.log("error")
    })
  }
}
