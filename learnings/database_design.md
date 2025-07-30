# Database Design

## Problem

A company needs a digital system to manage its product inventory, in order to:

    Register and consult products with data such as name, price, stock, category and status.

    Manage incoming and outgoing products to keep the stock updated.

    Register suppliers and associate them to products.

    Classify products by categories.

    Consult basic analytical data (such as best-selling products, low stock, etc.).

    Control access to the system according to the user's role (e.g. administrator, employee).

## Entities

- Product
- Supplier
- Category
- User

## Entities content

### Product

```json
{
  "id": string,
  "name": string,
  "price": number,
  "status": enum,
  "category": Category,
  "stock": number,
  "sell": number,
  "created_at": Date,
  "updated_at": Date,
  "supplier": Supplier
}
```

### Supplier

```json
{
  "id": string,
  "name": string,
  "country": string,
  "city": string,
  "phone_number":string,
}
```

### Category

```json
{
  "id": string,
  "name": string,
}
```

### User

```json
{
  "id": string,
  "name": string,
  "password": string,
  "user_name": string,
  "role": "admin" | "employee"
}
```
