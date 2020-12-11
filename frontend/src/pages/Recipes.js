import React, { useState, useEffect } from "react"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import { Typography, Row, Col, Input, Card } from "antd"
import "./Recipes.scss"
const { Search } = Input
const { Title } = Typography

const Recipies = () => {
  const { user } = useContextInfo()
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getRecipesOnce = async () => {
      const { data } = await MY_SERVICE.getRecipesChicken()
      setRecipes(data.hits)
    }
    getRecipesOnce()
  }, [])

  useEffect(() => {
    const getRecipies = async () => {
      const { data } = await MY_SERVICE.getRecipes(query)
      setRecipes(data.hits)
    }
    getRecipies()
  }, [query])

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    setQuery(search)
  }
  return (
    <>
      {user ? (
        <div id="recipes">
          <Row className="custom-header">
            <Col span={24}>
              <Title level={1}>
                Checkout
                <br />
                <span>Some healthy meals ideas</span>
              </Title>
              <div className="text-info">
                <Typography.Paragraph>
                  <p>
                    Nutrition and a proper diet are as crucial as your physical
                    training, ensuring your body has enough fuel to run and
                    recover is instrumental. Incorporating healthy dietary
                    practices in your training will ensure your body has enough
                    energy to keep going.
                    <br />
                    <br />
                    Here we provide you some healthy foods for each of the 3
                    macronutrients so you can get ideas of what to enter in the
                    search bar.
                    <br />
                    🍗 <b>Protein:</b> low-fat milk, beans, green peas, lean
                    beef, chicken, fish, eggs, cheese, yogurt, nuts, peanut
                    butter, cottage cheese, tofu and soy products.
                    <br />
                    🥔 <b>Carbs:</b> potatoes, yams, beans, peas, wheat bread,
                    bananas, macaroni, spaghetti, cereal, raisins, apples,
                    bagels, syrup, brown rice, corn, apples, carrots, and root
                    vegetables.
                    <br />
                    🥑 <b>Fats:</b> avocado, nuts, seeds, nut-butter, vegetable
                    oil, and salmon.
                  </p>
                </Typography.Paragraph>
              </div>
              <Search
                value={search}
                onChange={updateSearch}
                placeholder="Enter a food you love to see some healthy recipes"
                onSearch={getSearch}
              />
            </Col>
          </Row>
          <Row className="card-group">
            {recipes.map((recipe, i) => (
              <div key={i}>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Card>
                    <div className="card-left">
                      <p className="card-title">{recipe.recipe.label}</p>
                      <img alt="/recipe.jpg" src={recipe.recipe.image} />
                    </div>
                    <div className="card-content">
                      <p className="card-text">
                        {" "}
                        <b>Ingredients:</b>{" "}
                        {recipe.recipe.ingredientLines.map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                        ))}
                      </p>
                      <p>
                        This meal is
                        {recipe.recipe.healthLabels.map((healthLabel, i) => (
                          <span key={i}> {healthLabel} </span>
                        ))}
                      </p>
                      <p className="card-text">
                        <span key={recipe.recipe.calories}>
                          {" "}
                          <b>Calories: </b> {recipe.recipe.calories.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Recipies
