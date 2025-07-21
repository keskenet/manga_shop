#!/usr/bin/env python3

import requests
import json
import sys
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend API at: {API_BASE}")

def test_get_all_manga():
    """Test GET /api/manga endpoint"""
    print("\n=== Testing GET /api/manga ===")
    try:
        response = requests.get(f"{API_BASE}/manga")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            manga_list = response.json()
            print(f"Number of manga returned: {len(manga_list)}")
            
            # Check if we have the expected 6 manga
            if len(manga_list) != 6:
                print(f"❌ Expected 6 manga, got {len(manga_list)}")
                return False
            
            # Check for Ukrainian titles
            expected_titles = ["Наруто", "Атака Титанів", "Односкачний", "Демон Слейер", "Мій Академічний Герой", "Джуджицу Кайсен"]
            actual_titles = [manga['title'] for manga in manga_list]
            
            print("Ukrainian titles found:")
            for title in actual_titles:
                print(f"  - {title}")
            
            # Verify all expected titles are present
            missing_titles = [title for title in expected_titles if title not in actual_titles]
            if missing_titles:
                print(f"❌ Missing titles: {missing_titles}")
                return False
            
            # Check manga structure
            first_manga = manga_list[0]
            required_fields = ['id', 'title', 'author', 'price', 'description', 'image_url', 'genre', 'volumes', 'rating']
            missing_fields = [field for field in required_fields if field not in first_manga]
            
            if missing_fields:
                print(f"❌ Missing fields in manga object: {missing_fields}")
                return False
            
            print("✅ GET /api/manga test passed")
            return True, manga_list[0]['id']  # Return first manga ID for further testing
        else:
            print(f"❌ GET /api/manga failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False, None
            
    except Exception as e:
        print(f"❌ GET /api/manga test failed with error: {e}")
        return False, None

def test_get_specific_manga(manga_id):
    """Test GET /api/manga/{manga_id} endpoint"""
    print(f"\n=== Testing GET /api/manga/{manga_id} ===")
    try:
        response = requests.get(f"{API_BASE}/manga/{manga_id}")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            manga = response.json()
            print(f"Retrieved manga: {manga['title']}")
            
            # Check required fields
            required_fields = ['id', 'title', 'author', 'price', 'description', 'image_url', 'genre', 'volumes', 'rating']
            missing_fields = [field for field in required_fields if field not in manga]
            
            if missing_fields:
                print(f"❌ Missing fields: {missing_fields}")
                return False
            
            print("✅ GET /api/manga/{manga_id} test passed")
            return True
        else:
            print(f"❌ GET /api/manga/{manga_id} failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/manga/{manga_id} test failed with error: {e}")
        return False

def test_invalid_manga_id():
    """Test GET /api/manga/{invalid_id} endpoint"""
    print(f"\n=== Testing GET /api/manga/invalid_id ===")
    try:
        response = requests.get(f"{API_BASE}/manga/invalid_manga_id")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 404:
            print("✅ Invalid manga ID correctly returns 404")
            return True
        else:
            print(f"❌ Expected 404 for invalid manga ID, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Invalid manga ID test failed with error: {e}")
        return False

def test_cart_operations(manga_id):
    """Test all cart operations"""
    cart_id = "test_cart_123"
    
    # Test adding item to cart
    print(f"\n=== Testing POST /api/cart/{cart_id}/add ===")
    try:
        cart_item = {
            "manga_id": manga_id,
            "title": "Наруто",
            "price": 299.99,
            "quantity": 2,
            "image_url": "https://example.com/naruto.jpg"
        }
        
        response = requests.post(f"{API_BASE}/cart/{cart_id}/add", json=cart_item)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"Item added to cart. Total: {result.get('total', 'N/A')}")
            print("✅ POST /api/cart/{cart_id}/add test passed")
        else:
            print(f"❌ POST /api/cart/{cart_id}/add failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/cart/{cart_id}/add test failed with error: {e}")
        return False
    
    # Test getting cart contents
    print(f"\n=== Testing GET /api/cart/{cart_id} ===")
    try:
        response = requests.get(f"{API_BASE}/cart/{cart_id}")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            cart = response.json()
            print(f"Cart items: {len(cart.get('items', []))}")
            print(f"Cart total: {cart.get('total', 'N/A')}")
            
            if len(cart.get('items', [])) == 1:
                print("✅ GET /api/cart/{cart_id} test passed")
            else:
                print(f"❌ Expected 1 item in cart, got {len(cart.get('items', []))}")
                return False
        else:
            print(f"❌ GET /api/cart/{cart_id} failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/cart/{cart_id} test failed with error: {e}")
        return False
    
    # Test updating item quantity
    print(f"\n=== Testing PUT /api/cart/{cart_id}/item/{manga_id} ===")
    try:
        response = requests.put(f"{API_BASE}/cart/{cart_id}/item/{manga_id}?quantity=3")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"Item quantity updated. Total: {result.get('total', 'N/A')}")
            print("✅ PUT /api/cart/{cart_id}/item/{manga_id} test passed")
        else:
            print(f"❌ PUT /api/cart/{cart_id}/item/{manga_id} failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ PUT /api/cart/{cart_id}/item/{manga_id} test failed with error: {e}")
        return False
    
    # Test removing item from cart
    print(f"\n=== Testing DELETE /api/cart/{cart_id}/item/{manga_id} ===")
    try:
        response = requests.delete(f"{API_BASE}/cart/{cart_id}/item/{manga_id}")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"Item removed from cart. Total: {result.get('total', 'N/A')}")
            print("✅ DELETE /api/cart/{cart_id}/item/{manga_id} test passed")
        else:
            print(f"❌ DELETE /api/cart/{cart_id}/item/{manga_id} failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ DELETE /api/cart/{cart_id}/item/{manga_id} test failed with error: {e}")
        return False
    
    # Verify cart is empty after removal
    print(f"\n=== Verifying empty cart ===")
    try:
        response = requests.get(f"{API_BASE}/cart/{cart_id}")
        if response.status_code == 200:
            cart = response.json()
            if len(cart.get('items', [])) == 0 and cart.get('total', 0) == 0:
                print("✅ Cart is empty after item removal")
                return True
            else:
                print(f"❌ Cart should be empty but has {len(cart.get('items', []))} items")
                return False
        else:
            print(f"❌ Failed to verify empty cart: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Empty cart verification failed with error: {e}")
        return False

def test_empty_cart():
    """Test getting a non-existent cart"""
    print(f"\n=== Testing GET /api/cart/nonexistent_cart ===")
    try:
        response = requests.get(f"{API_BASE}/cart/nonexistent_cart")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            cart = response.json()
            if len(cart.get('items', [])) == 0 and cart.get('total', 0) == 0:
                print("✅ Non-existent cart returns empty cart")
                return True
            else:
                print(f"❌ Non-existent cart should be empty")
                return False
        else:
            print(f"❌ Non-existent cart test failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Non-existent cart test failed with error: {e}")
        return False

def main():
    """Run all backend API tests"""
    print("🧪 Starting Backend API Tests for Manga Shop")
    print("=" * 50)
    
    test_results = []
    
    # Test manga endpoints
    manga_test_result, manga_id = test_get_all_manga()
    test_results.append(("GET /api/manga", manga_test_result))
    
    if manga_id:
        specific_manga_result = test_get_specific_manga(manga_id)
        test_results.append(("GET /api/manga/{id}", specific_manga_result))
        
        # Test cart operations with valid manga ID
        cart_result = test_cart_operations(manga_id)
        test_results.append(("Cart Operations", cart_result))
    else:
        test_results.append(("GET /api/manga/{id}", False))
        test_results.append(("Cart Operations", False))
    
    # Test invalid manga ID
    invalid_manga_result = test_invalid_manga_id()
    test_results.append(("Invalid Manga ID", invalid_manga_result))
    
    # Test empty cart
    empty_cart_result = test_empty_cart()
    test_results.append(("Empty Cart", empty_cart_result))
    
    # Print summary
    print("\n" + "=" * 50)
    print("🏁 TEST SUMMARY")
    print("=" * 50)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests passed!")
        return True
    else:
        print("⚠️  Some backend API tests failed!")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)