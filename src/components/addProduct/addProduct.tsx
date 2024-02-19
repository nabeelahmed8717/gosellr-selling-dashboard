import React, { useState } from 'react'
import "./addProduct.scss"
import { Alert, Button, Checkbox, Col, ColorPicker, Form, Image, Input, InputNumber, List, Modal, Popconfirm, Row, Select, SelectProps, Space, Switch, TreeSelect } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { categoryData } from '../../mock/gosellrCategories';
import uploadIcon from "../../assets/icons/upload.svg"
import crossSmallIcon from "../../assets/icons/cross-small.svg"
import { UserOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { dummyProducts } from '../../mock/dummyProducts';
import { CloseCircleFilled } from '@ant-design/icons';


const { Option } = Select;
const productSizes = [
  { value: 'XXS', label: 'XXS - Double Extra Small' },
  { value: 'XS', label: 'XS - Extra Small' },
  { value: 'S', label: 'S - Small' },
  { value: 'M', label: 'M - Medium' },
  { value: 'L', label: 'L - Large' },
  { value: 'XL', label: 'XL - Extra Large' },
  { value: 'XXL', label: 'XXL - Double Extra Large' },
  { value: '3XL', label: '3XL - Triple Extra Large' },
  { value: '4XL', label: '4XL - 4XL' },
  { value: '5XL', label: '5XL - 5XL' },
];

const selectAfter = (
  <Select defaultValue="Kg">
    <Option value="Kg">Kg</Option>
    <Option value="g">g</Option>
    <Option value="lb">lb</Option>
    <Option value="oz">oz</Option>
    <Option value="mg">mg</Option>
    <Option value="ton">ton</Option>
    <Option value="ct">ct</Option>
  </Select>
);

const AddProduct = () => {

  const [size, setSize] = useState<any>('middle');
  const [images, setImages] = useState<any[]>([]);
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [value, setValue] = useState<string>();
  const [productPrice, setProductPrice] = useState<number>();
  const [checked, setChecked] = useState(false);

  const [searchProductTemplate, setSearchProductTemplate] = useState('')

  const filteredProducts = dummyProducts.filter((product: any) =>
    product.productLabel.toLowerCase().includes(searchProductTemplate.toLowerCase())
  );

  const ammountSellerGet = productPrice && productPrice * 0.95

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handelProductPriceChange = (value: number) => {
    setProductPrice(value)
  };

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const onProductCheckChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  //image upload


  const handleImageChange = (e: any) => {
    const selectedImages = Array.from(e.target.files);

    // Create an array of image previews
    const imagePreviews = selectedImages.map((image: any) => URL.createObjectURL(image));

    setImages([...images, ...selectedImages]);
    setPreviewImages([...previewImages, ...imagePreviews]);
  };

  const handleDeleteImage = (index: any) => {
    const updatedImages = [...images];
    const updatedPreviewImages = [...previewImages];

    updatedImages.splice(index, 1);
    updatedPreviewImages.splice(index, 1);

    setImages(updatedImages);
    setPreviewImages(updatedPreviewImages);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };



  //  ??colors 
  const [colors, setColors] = useState<any>([]);
  const [newColor, setNewColor] = useState<any>("");

  const handleColorChange = (color: any) => {
    console.log("color => ", color)
    if (color) {
      setColors([...colors, color]);
      // setNewColor("");
    }
  };

  const handleColorRemove = (color: any) => {
    const updatedColors = colors.filter((c: any) => c !== color);
    setColors(updatedColors);
  };


  return (
    <div className="add-container-main-container  bx-bg--white border-repel card-shadow">


      <div className="head-add-products">
        <h2>Add Product</h2>
      </div>

      <div className="product-nodes-copied-container">
        <p className='fs-14 fw-500' style={{ marginBottom: "5px" }}>Search and copy products details</p>
        <Input onChange={(e) => setSearchProductTemplate(e.target.value)} value={searchProductTemplate} style={{ width: '100%', height: '40px', boxShadow: "none" }} placeholder='Search for product'
          suffix={
            <CloseCircleFilled onClick={() => setSearchProductTemplate('')} />
          } />

      </div>

      {
        searchProductTemplate.length > 0 &&
        <div className="search-product-template">
          {
            filteredProducts.length > 0 &&
            <>
              <Alert message="Select products you want to copy" type="info" showIcon />
              <Alert message="Owner's Attribute will auto add to published post" type="info" showIcon style={{ marginTop: "5px" }} />
              <br />
            </>
          }

          <div className="searched-product-inner">
            {
              filteredProducts.length > 0 ?
                <>
                  {filteredProducts.map((item: any) => (
                    <div className="product-selectList-bx">
                      <div className='product-image'>
                        <Image src={item.productImage} />
                      </div>
                      <div>
                        <h3 className='fs-15 fw-500'>{item.productLabel}</h3>
                        <p><strong className='fw-500'>Description :</strong> {item?.productDescription}</p>
                        <p><strong className='fw-500'>Price :</strong> RS.{item.productPrice}</p>
                      </div>
                    </div>
                  ))}
                </>
                :
                <div className='no-founds'>
                  <h4>The product you are looking is currently unavailable</h4>
                  <p>Try another "keyword"</p>
                </div>
            }
          </div>

        </div>
      }


      <div className="form-product-upload">
        <Form
          name="basic"
          initialValues={{
            "productTitle": "Dummy product ~pasted ",
            "productDescription": "This is a dummy product description",
            "productCategory": "Electronics",
            "manualCategory": "mens",
            "gender": "male",
            "productSize": [
              "S", "M"
            ],
            "productPrice": 23,
            "productWeight": "2",
            "packageLength": "2",
            "packageBreadth": "3",
            "packageWidth": "4"
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
          layout="vertical">
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={12}>

              <Row>

                <div className="grouped-inputs">
                  <div className="title-grouped">Description</div>
                  <div className='grouped-inner'>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label="Product Title"
                        name="productTitle"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label="Product Discription"
                        name="productDescription"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <TextArea rows={4} placeholder="Type here" maxLength={6} />
                      </Form.Item>
                    </Col>
                  </div>
                </div>

                <div className="grouped-inputs">
                  <div className="title-grouped">Category</div>
                  <div className='grouped-inner'>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label="Product Category"
                        name="productCategory"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <TreeSelect
                          showSearch
                          style={{ width: '100%' }}
                          value={value}
                          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                          placeholder="Please select"
                          allowClear
                          // treeDefaultExpandAll
                          onChange={onChange}
                          treeData={categoryData}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label={<div>Add manual category <span style={{ color: "#c2c2c2", fontWeight: "400" }}>(Optional)</span></div>}
                        name="manualCategory"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label="Select Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Select
                          style={{ width: '100%', height: '40px' }}
                          placeholder="Select"
                          // onChange={handleChange}
                          options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'kids', label: 'Kids' },
                            { value: 'notSpecified', label: 'Not specified' },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                  </div>
                </div>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Row>
                <div className="grouped-inputs">
                  <div className="title-grouped">Upload Product Images</div>
                  <div className='grouped-inner'>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <div className="wrapper-product-multiple-upload">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                          id='image_upload'
                          style={{ display: 'none' }}
                        />

                        <div className="image-preview-container">
                          {previewImages.map((preview: any, index: any) => (
                            <div key={index} className="image-preview">
                              <img className='prev-image' src={preview} alt={`Preview ${index + 1}`} />
                              <div
                                className="delete-icon"
                                onClick={() => handleDeleteImage(index)}
                              >
                                <img width={12} height={12} src={crossSmallIcon} alt="" />
                              </div>
                            </div>
                          ))}
                          <label htmlFor="image_upload">
                            <div className="upload-images" id='image_upload'><img src={uploadIcon} width={20} height={20} alt="" /><span>Upload</span></div>
                          </label>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>

                <div className="grouped-inputs">
                  <div className="title-grouped">Product Size</div>
                  <div className='grouped-inner'>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <Form.Item
                        label="Size"
                        name="productSize"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Select
                          rootClassName='select-sizes-wrapper'
                          mode="tags"
                          style={{ width: '100%' }}
                          placeholder="Tags Mode"
                          onChange={handleChange}
                          options={productSizes}
                        />
                      </Form.Item>
                    </Col>
                  </div>
                </div>

                <div className="grouped-inputs">
                  <div className="title-grouped">Product Color</div>
                  <div className='grouped-inner'>
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <div>
                        <Row gutter={[16, 16]}>
                          <div className='d-flex align-center' style={{ gap: "10px" }}>
                            <div className='d-flex align-center' style={{ gap: "10px" }}>
                              <label className='fs-14 fw-500' htmlFor="">Select color</label>
                              <input className='color-selector' type="color" name="" value={newColor} id="" onChange={(e) => setNewColor(e.target.value)} />
                            </div>
                            <Space>
                              <Button htmlType='button' className='add-color-button' onClick={() => handleColorChange(newColor)}>
                                Add Color
                              </Button>
                            </Space>
                          </div>
                        </Row>

                        <Row gutter={[16, 16]}>
                          <Col span={24} style={{ display: "flex", alignItems: 'center', gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                            {colors.length ?
                              colors.map((color: any, index: any) => (
                                <div className='d-flex align-center wrapper-show-color' style={{ gap: "10px" }}>
                                  <div key={index} style={{ backgroundColor: color, width: "30px", height: "30px" }}>
                                  </div>
                                  <Button htmlType='button' className='button-cancel-color d-flex align-center justify-center' onClick={() => handleColorRemove(color)}>
                                    <img src={crossSmallIcon} width={15} height={15} alt="" />
                                  </Button>
                                </div>
                              ))
                              :
                              <>No color selected</>}
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </div>
                </div>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="grouped-inputs">
                <div className="title-grouped">Product Price</div>
                <div className='grouped-inner'>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item
                      label="Price"
                      name="productPrice"
                      rules={[{ required: true, message: 'Required field' }]}
                    >
                      <InputNumber placeholder='0' min={1} style={{ width: '100%', height: '40px' }} prefix={<span>Rs</span>} onChange={(e: any) => handelProductPriceChange(e)} />
                    </Form.Item>
                  </Col>

                  {
                    ammountSellerGet &&
                    <Col xs={24} sm={24} md={24} lg={24}>
                      <label htmlFor="">You will recieve after service charges</label>
                      <p>{ammountSellerGet.toFixed()}</p>
                    </Col>
                  }
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="grouped-inputs">
                <div className="title-grouped">Delivery / Shipping Details</div>
                <div className='grouped-inner del-ex'>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item
                      label="Product Weight"
                      name="productWeight"
                      rules={[{ required: true, message: 'Required field' }]}
                    >
                      <Input placeholder="Type here" style={{ width: '100%', height: '40px' }} addonAfter={selectAfter} />
                    </Form.Item>
                  </Col>

                  <Row gutter={20} style={{ width: '100%', margin: "0 auto" }}>
                    <Col xs={24} sm={24} md={8} lg={8}>
                      <Form.Item
                        label="Length"
                        name="packageLength"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Input placeholder="Type here" style={{ width: '100%', height: '40px', boxShadow: "none" }} suffix={<span style={{ color: "grey" }}>inches</span>} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                      <Form.Item
                        label="Breadth"
                        name="packageBreadth"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Input placeholder="Type here" style={{ width: '100%', height: '40px', boxShadow: "none" }} suffix={<span style={{ color: "grey" }}>inches</span>} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                      <Form.Item
                        label="Width"
                        name="packageWidth"
                        rules={[{ required: true, message: 'Required field' }]}
                      >
                        <Input placeholder="Type here" style={{ width: '100%', height: '40px', boxShadow: "none" }} suffix={<span style={{ color: "grey" }}>inches</span>} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                label=''
                name="productCheck"
                rules={[{ required: false, message: 'Required field' }]}
              >
                <Checkbox onChange={onProductCheckChange}>
                  I have checked all product information
                </Checkbox>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                label='Allow other users to copy your product details'
                name="allowToCopy"
                rules={[{ required: false, message: 'Required field' }]}
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>



          <Button htmlType='submit' className='upload-product-button'>Add Product</Button>
        </Form>
      </div>


    </div>
  )
}

export default AddProduct