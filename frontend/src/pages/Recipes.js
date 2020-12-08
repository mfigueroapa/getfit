import React, { useState, useEffect } from "react"
import { useContextInfo } from "../hooks/context"
import MY_SERVICE from "../services"
import {
  Typography,
  Row,
  Col,
  Skeleton,
  Divider,
  Input,
  Card,
  Form,
  Button,
  Select,
  Modal,
  Spin,
} from "antd"
const { Search } = Input
const Recipies = () => {
  const { user } = useContextInfo()
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    getRecipesOnce()
  }, [])

  useEffect(() => {
    getRecipies()
  }, [query])

  const getRecipesOnce = async () => {
    const { data } = await MY_SERVICE.getRecipesChicken()
    console.log(data)
    setRecipes(data.hits)
  }

  const getRecipies = async () => {
    const { data } = await MY_SERVICE.getRecipes(query)
    console.log(data)
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const getSearch = (e) => {
    setQuery(search)
  }
  return (
    <>
      <Search
        value={search}
        onChange={updateSearch}
        placeholder="Enter a food you love to see some healthy recipes"
        onSearch={getSearch}
      />
      <Divider />
      <Row>
      {recipes.map((recipe) => (
        <>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={`${recipe.recipe.label}${recipe.recipe.calories}`}>
            <Card
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <img src={recipe.recipe.image} alt="" />
              <p>Calories: {recipe.recipe.calories}</p>
            </Card>
          </Col>
        </>
      ))}
      </Row>
    </>
  )
}

export default Recipies
