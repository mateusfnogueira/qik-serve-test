import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CategoryList } from './category-list.component'
import { IProductCategory } from '../../interfaces/products.interface'

const mockCategories: IProductCategory[] = [
  {
    id: 1,
    name: 'Category 1',
    description: 'Category 1 description',
    position: 1,
    visible: 1,
    images: [],
    items: []
  },
  {
    id: 2,
    name: 'Category 2',
    description: 'Category 3 description',
    position: 1,
    visible: 1,
    images: [],
    items: []
  },
  {
    id: 3,
    name: 'Category 3',
    description: 'Category 3 description',
    position: 1,
    visible: 1,
    images: [],
    items: []
  }
]

const mockSetSelectedCategory = jest.fn()

test('renders category list component', () => {
  test('renders category list component', () => {
    render(
      <CategoryList
        categories={mockCategories}
        setSelectedCategory={mockSetSelectedCategory}
        selectedCategory=""
      />
    )
    const categoryListElement = screen.getByTestId('category-list')
    expect(categoryListElement).toBeInTheDocument()
  })

  test('displays correct category names', () => {
    render(
      <CategoryList categories={mockCategories} setSelectedCategory={mockSetSelectedCategory} />
    )
    const categoryElements = screen.getAllByTestId('category-item')
    expect(categoryElements).toHaveLength(mockCategories.length)
    categoryElements.forEach((element, index) => {
      expect(element).toHaveTextContent(mockCategories[index].name)
    })
  })

  test('calls setSelectedCategory handler when a category is clicked', () => {
    render(
      <CategoryList
        categories={mockCategories}
        setSelectedCategory={mockSetSelectedCategory}
        selectedCategory=""
      />
    )
    const categoryElements = screen.getAllByTestId('category-item')
    categoryElements.forEach((element, index) => {
      fireEvent.click(element)
      expect(mockSetSelectedCategory).toHaveBeenCalledWith(mockCategories[index].id)
    })
  })

  test('highlights the selected category', () => {
    const selectedCategory = '1'
    render(
      <CategoryList
        categories={mockCategories}
        setSelectedCategory={mockSetSelectedCategory}
        selectedCategory={selectedCategory}
      />
    )
    const selectedElement = screen.getByText('Category 1')
    expect(selectedElement).toHaveClass('selected')
  })
  const categoryListElement = screen.getByTestId('category-list')
  expect(categoryListElement).toBeInTheDocument()
})

test('displays correct category names', () => {
  render(
    <CategoryList
      categories={mockCategories}
      setSelectedCategory={mockSetSelectedCategory}
      selectedCategory=""
    />
  )
  const categoryElements = screen.getAllByTestId('category-item')
  expect(categoryElements).toHaveLength(mockCategories.length)
  categoryElements.forEach((element, index) => {
    return expect(element).toHaveTextContent(mockCategories[index].name)
  })
})

test('calls onClick handler when a category is clicked', () => {
  render(<CategoryList categories={mockCategories} setSelectedCategory={mockSetSelectedCategory} />)
  const categoryElements = screen.getAllByTestId('category-item')
  categoryElements.forEach((element, index) => {
    element.click()
    expect(mockSetSelectedCategory).toHaveBeenCalledWith(mockCategories[index])
  })
})
