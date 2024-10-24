import { NextResponse, NextRequest } from 'next/server'
import { IProduct, IProductMenu, IProductsResponse } from '@/app/_shared/interfaces'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string)
  const category = searchParams.get('category')

  try {
    const res = await fetch('https://cdn-dev.preoday.com/challenge/menu')

    if (!res.ok) {
      return NextResponse.error()
    }
    const data: IProductMenu = await res.json()

    const formatedResponse: IProductsResponse = {
      categoryList: [],
      allProducts: []
    }

    const ifCategory =
      category !== 'null' && category !== 'undefined' && category && category?.length > 0

    for (let i = 0; i < data.sections.length; i++) {
      const category = {
        id: data.sections[i].id,
        name: data.sections[i].name,
        description: data.sections[i].description,
        position: data.sections[i].position,
        visible: data.sections[i].visible,
        images: data.sections[i].images
      }
      formatedResponse.categoryList.push(category)
      data.sections[i].items?.forEach((item) => {
        const product = {
          ...item,
          category: data.sections[i].name
        }
        formatedResponse.allProducts.push(product)
      })
    }

    if (ifCategory) {
      formatedResponse.allProducts = formatedResponse.allProducts.filter((product: IProduct) => {
        return product.category === category
      })
    }

    const resp = {
      data: formatedResponse,
      message: 'get products succesfull'
    }

    return NextResponse.json(resp)
  } catch (error) {
    return NextResponse.error()
  }
}
